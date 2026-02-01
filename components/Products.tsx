'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Plus, Search, Filter, AlertCircle, Edit3, Trash2,
  ShoppingBag, Package, DollarSign, X, ImageIcon,
  Upload, RefreshCw, MoreVertical, Zap, Loader2
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input, TextArea } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getProductsBySyndicate,
  createProduct,
  deleteProduct,
  updateProductStock,
  updateProduct,
  Product,
  CreateProductRequest
} from '@/lib/services/products.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Utilisé uniquement pour les assets locaux/statiques si besoin

// --- Helper FCFA ---
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-CM', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0
  }).format(amount);
};

// --- Helper Extraction Image Sécurisée ---
const getProductImageUrl = (product: Product): string | null => {
  if (!product.image) return null;
  // Cas 1: L'API renvoie un objet { url: "..." }
  if (typeof product.image === 'object' && 'url' in product.image) {
    return (product.image as any).url;
  }
  // Cas 2: L'API renvoie directement la string URL
  if (typeof product.image === 'string') {
    return product.image;
  }
  return null;
};

export const Products: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // --- Data States ---
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  // --- Filter States ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // --- Modal States ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- Form States ---
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [stockAdjustment, setStockAdjustment] = useState<string>('');

  const [formData, setFormData] = useState<CreateProductRequest>({
    syndicatId: '',
    name: '',
    description: '',
    price: 0,
    sku: '',
    category: '',
    stock: 0,
    isActive: true
  });

  // 1. Chargement des produits
  const fetchProducts = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getProductsBySyndicate(syndicateStatus.syndicateId);
      setProducts(data);
    } catch (error) {
      console.error("Erreur chargement:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [syndicateStatus?.syndicateId]);

  // --- Handlers UI ---

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const openCreateModal = () => {
    setModalMode('create');
    setFormData({
      syndicatId: syndicateStatus?.syndicateId || '',
      name: '', description: '', price: 0, sku: '', category: '', stock: 0, isActive: true
    });
    setImageFile(null);
    setImagePreview(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setModalMode('edit');
    setSelectedProduct(product);
    setFormData({
      syndicatId: product.syndicatId,
      name: product.name,
      description: product.description,
      price: product.price,
      sku: product.sku,
      category: product.category,
      stock: product.stock,
      isActive: product.isActive
    });
    // Gestion preview image existante
    const url = getProductImageUrl(product);
    setImagePreview(url);
    setImageFile(null);
    setIsModalOpen(true);
  };

  const openStockModal = (product: Product) => {
    setSelectedProduct(product);
    setStockAdjustment(product.stock.toString());
    setIsStockModalOpen(true);
  };

  // --- Handlers API ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syndicateStatus?.syndicateId) return;

    setIsActionLoading(true);
    try {
      if (modalMode === 'create') {
        await createProduct(formData, imageFile);
      } else {
        if (selectedProduct) {
          await updateProduct(selectedProduct.id, {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            category: formData.category,
            sku: formData.sku,
            isActive: formData.isActive
          });
        }
      }
      await fetchProducts();
      setIsModalOpen(false);
    } catch (error) {
      alert("Une erreur est survenue.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleStockUpdate = async () => {
    if (!selectedProduct) return;
    setIsActionLoading(true);
    try {
      const newStock = parseInt(stockAdjustment);
      if (isNaN(newStock)) throw new Error("Stock invalide");

      await updateProductStock(selectedProduct.id, newStock);

      setProducts(prev => prev.map(p => p.id === selectedProduct.id ? { ...p, stock: newStock } : p));
      setIsStockModalOpen(false);
    } catch (error) {
      alert("Erreur mise à jour stock.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce produit définitivement ?")) return;
    try {
      setProducts(prev => prev.filter(p => p.id !== id));
      await deleteProduct(id);
    } catch (error) {
      alert("Impossible de supprimer.");
      fetchProducts();
    }
  };

  // --- Filtrage ---
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  // --- Rendu ---
  return (
      <div className="space-y-6 animate-in fade-in duration-500">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Catalogue Produits</h1>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Gérez votre inventaire et vos ventes
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={fetchProducts} leftIcon={RefreshCw} disabled={isLoading}>
              Actualiser
            </Button>
            <Button onClick={openCreateModal} leftIcon={Plus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20">
              Nouveau Produit
            </Button>
          </div>
        </div>

        {/* Stats Rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-[#2563EB] rounded-xl"><Package className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Produits</p>
              <h3 className="text-2xl font-bold text-[#172554]">{products.length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><DollarSign className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Valeur Stock</p>
              <h3 className="text-2xl font-bold text-[#172554]">{formatCurrency(products.reduce((acc, p) => acc + (p.price * p.stock), 0))}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl"><AlertCircle className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Rupture de stock</p>
              <h3 className="text-2xl font-bold text-[#172554]">{products.filter(p => p.stock <= 5).length}</h3>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
                type="text"
                placeholder="Rechercher par nom, SKU..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#172554]/10 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        selectedCategory === cat
                            ? 'bg-[#172554] text-white shadow-md'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {cat === 'all' ? 'Tout' : cat}
                </button>
            ))}
          </div>
        </div>

        {/* Grille Produits */}
        {isLoading ? (
            <div className="flex justify-center py-24"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#172554]">Inventaire vide</h3>
              <p className="text-slate-500 mb-6">Ajoutez votre premier produit pour commencer la vente.</p>
              <Button onClick={openCreateModal}>Ajouter un produit</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => {
                  const imageUrl = getProductImageUrl(product);

                  return (
                      <motion.div
                          key={product.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                      >
                        {/* Image (Avec balise <img> standard pour compatibilité max) */}
                        <div className="relative aspect-square bg-slate-100 overflow-hidden">
                          {imageUrl ? (
                              <img
                                  src={imageUrl}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                              />
                          ) : (
                              <div className="flex items-center justify-center h-full text-slate-300">
                                <ImageIcon className="w-12 h-12" />
                              </div>
                          )}

                          {/* Badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {product.stock <= 0 ? (
                                <Badge className="bg-red-500 text-white border-0 shadow-lg">Rupture</Badge>
                            ) : product.stock <= 5 ? (
                                <Badge className="bg-orange-500 text-white border-0 shadow-lg">Faible stock: {product.stock}</Badge>
                            ) : null}
                          </div>

                          {/* Actions Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button
                                onClick={() => openEditModal(product)}
                                className="p-3 bg-white text-[#172554] rounded-full hover:scale-110 transition-transform shadow-lg"
                                title="Éditer"
                            >
                              <Edit3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => openStockModal(product)}
                                className="p-3 bg-[#172554] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                                title="Gérer le stock"
                            >
                              <Zap className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-xs font-mono text-slate-400 mb-0.5">{product.sku}</p>
                              <h3 className="font-bold text-slate-900 line-clamp-1">{product.name}</h3>
                            </div>
                            <div className="relative group/menu">
                              <button className="text-slate-400 hover:text-[#172554]"><MoreVertical className="w-5 h-5" /></button>
                              <div className="absolute right-0 top-full hidden group-hover/menu:block bg-white shadow-xl rounded-xl border border-slate-100 py-2 w-32 z-10">
                                <button onClick={() => handleDelete(product.id)} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                                  <Trash2 className="w-4 h-4" /> Supprimer
                                </button>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">{product.description}</p>

                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="text-xs text-slate-400 uppercase font-semibold">Prix</span>
                              <span className="text-lg font-bold text-[#172554]">{formatCurrency(product.price)}</span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-xs text-slate-400 uppercase font-semibold">Stock</span>
                              <span className={`text-lg font-bold ${product.stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                          {product.stock}
                        </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
        )}

        {/* --- MODALE STOCK (Rapide) --- */}
        <AnimatePresence>
          {isStockModalOpen && selectedProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#172554]">
                      <Package className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172554]">Ajuster le stock</h3>
                    <p className="text-slate-500 text-sm mb-6">{selectedProduct.name}</p>

                    <div className="flex items-center justify-center gap-4 mb-8">
                      <button onClick={() => setStockAdjustment(s => String(Math.max(0, parseInt(s || '0') - 1)))} className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 font-bold text-xl">-</button>
                      <div className="w-24">
                        <input
                            type="number"
                            className="w-full text-center text-3xl font-bold text-[#172554] outline-none border-b-2 border-slate-100 focus:border-[#172554] bg-transparent py-2"
                            value={stockAdjustment}
                            onChange={(e) => setStockAdjustment(e.target.value)}
                        />
                      </div>
                      <button onClick={() => setStockAdjustment(s => String(parseInt(s || '0') + 1))} className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 font-bold text-xl">+</button>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="ghost" className="flex-1" onClick={() => setIsStockModalOpen(false)}>Annuler</Button>
                      <Button className="flex-1 bg-[#172554] text-white" onClick={handleStockUpdate} isLoading={isActionLoading}>Valider</Button>
                    </div>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

        {/* --- MODALE CRÉATION / ÉDITION --- */}
        <AnimatePresence>
          {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
                  <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="text-xl font-bold text-[#172554]">{modalMode === 'create' ? 'Nouveau Produit' : 'Modifier Produit'}</h3>
                    <button onClick={() => setIsModalOpen(false)}><X className="w-6 h-6 text-slate-400 hover:text-slate-600" /></button>
                  </div>

                  <div className="p-6 overflow-y-auto custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Upload Image */}
                        <div
                            onClick={() => modalMode === 'create' && fileInputRef.current?.click()}
                            className={`w-full sm:w-40 h-40 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center relative overflow-hidden transition-all ${
                                modalMode === 'create' ? 'cursor-pointer border-slate-300 hover:border-[#172554] hover:bg-blue-50' : 'border-slate-200 bg-slate-50'
                            }`}
                        >
                          {imagePreview ? (
                              // On utilise img standard pour la preview aussi
                              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                              <>
                                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                                <span className="text-xs text-slate-500 font-medium text-center px-2">Ajouter photo</span>
                              </>
                          )}
                          {modalMode === 'create' && <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />}
                        </div>

                        <div className="flex-1 space-y-4">
                          <Input label="Nom du produit" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder="Ex: T-Shirt Logo" />
                          <div className="grid grid-cols-2 gap-4">
                            <Input label="Référence (SKU)" value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})} required placeholder="TSH-001" />
                            <Input label="Catégorie" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required placeholder="Vêtements" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Prix (FCFA)" type="number" min="0" value={formData.price} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})} required />
                        <Input label="Stock Initial" type="number" min="0" value={formData.stock} onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})} required disabled={modalMode === 'edit'} />
                      </div>

                      <TextArea label="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required className="min-h-[100px]" placeholder="Caractéristiques, matériaux..." />

                      <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <input type="checkbox" id="isActive" checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.target.checked})} className="w-5 h-5 rounded text-[#172554] focus:ring-[#172554]" />
                        <label htmlFor="isActive" className="text-sm font-medium text-slate-700 cursor-pointer">Produit actif (visible sur le marketplace)</label>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <Button type="button" variant="ghost" className="flex-1" onClick={() => setIsModalOpen(false)}>Annuler</Button>
                        <Button type="submit" className="flex-1 bg-[#172554] text-white" isLoading={isActionLoading}>
                          {modalMode === 'create' ? 'Créer le produit' : 'Enregistrer'}
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};