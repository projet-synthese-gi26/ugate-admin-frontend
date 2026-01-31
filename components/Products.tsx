'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Plus, Search, Filter, AlertCircle, CheckCircle2, Edit3, Trash2,
  ShoppingBag, Package, TrendingUp, DollarSign, X, Save,
  Loader2, ImageIcon, Upload, RefreshCw
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getProductsBySyndicate,
  createProduct,
  deleteProduct,
  updateProductStock,
  updateProduct,
  CreateProductDTO
} from '@/lib/services/products.service';
import { ProductResponse } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Products: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // Data States
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // UI States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);

  // Forms States
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [stockAdjustment, setStockAdjustment] = useState('');

  const [formData, setFormData] = useState<Partial<CreateProductDTO>>({
    name: '',
    description: '',
    price: 0,
    sku: '',
    category: '',
    stock: 0,
    isActive: true
  });

  // --- Fetch Data ---
  const fetchProducts = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getProductsBySyndicate(syndicateStatus.syndicateId);
      setProducts(data);
    } catch (error) {
      console.error("Erreur chargement produits:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syndicateStatus?.syndicateId]);

  // --- Handlers ---

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syndicateStatus?.syndicateId || !imageFile) return;

    setIsActionLoading(true);
    try {
      await createProduct({
        ...formData,
        syndicatId: syndicateStatus.syndicateId,
        price: Number(formData.price),
        stock: Number(formData.stock)
      } as CreateProductDTO, imageFile);

      await fetchProducts();
      setIsCreateModalOpen(false);
      resetForm();
    } catch (error) {
      console.error("Erreur création:", error);
      alert("Erreur lors de la création du produit");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) return;

    // Optimistic UI update
    setProducts(current => current.filter(p => p.id !== id));

    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("Erreur suppression:", error);
      fetchProducts(); // Revert on error
    }
  };

  const handleStockUpdate = async () => {
    if (!selectedProduct) return;
    setIsActionLoading(true);
    try {
      const newStock = selectedProduct.stock + parseInt(stockAdjustment);
      await updateProductStock(selectedProduct.id, newStock);

      // Update local state
      setProducts(current => current.map(p =>
          p.id === selectedProduct.id ? { ...p, stock: newStock } : p
      ));

      setIsStockModalOpen(false);
      setStockAdjustment('');
    } catch (error) {
      console.error("Erreur stock:", error);
    } finally {
      setIsActionLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: 0,
      sku: '',
      category: '',
      stock: 0,
      isActive: true
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Catalogue Produits</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              {products.length} produits • {products.filter(p => p.stock > 0).length} en stock
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={fetchProducts} leftIcon={RefreshCw} disabled={isLoading}>
              Actualiser
            </Button>
            <Button onClick={() => setIsCreateModalOpen(true)} leftIcon={Plus} className="bg-[#1877F2] text-white">
              Ajouter un Produit
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-100">Valeur du Stock</span>
                <DollarSign className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-2xl font-bold">
                {products.reduce((acc, p) => acc + (p.price * p.stock), 0).toLocaleString()} €
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Produits en rupture</span>
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {products.filter(p => p.stock <= 0).length}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Catégories</span>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {new Set(products.map(p => p.category)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Rechercher par nom ou référence (SKU)..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin" />
            </div>
        ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
              <p className="text-gray-500 mb-6">Commencez par ajouter votre premier produit.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>Ajouter un produit</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        layout
                    >
                      <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                        {/* Image */}
                        <div className="relative aspect-square bg-gray-100 overflow-hidden">
                          {product.image?.url ? (
                              <Image
                                  src={product.image.url}
                                  alt={product.name}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                          ) : (
                              <div className="flex items-center justify-center h-full text-gray-400">
                                <ImageIcon className="w-12 h-12" />
                              </div>
                          )}

                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge variant={product.stock > 0 ? "success" : "error"} className="shadow-sm">
                              {product.stock > 0 ? `${product.stock} en stock` : 'Rupture'}
                            </Badge>
                          </div>

                          {/* Actions Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => { setSelectedProduct(product); setIsStockModalOpen(true); }}
                            >
                              <Package className="w-4 h-4" />
                            </Button>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="mb-2">
                            <p className="text-xs font-mono text-gray-400 mb-1">{product.sku}</p>
                            <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                          </div>

                          <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <Badge variant="outline">{product.category}</Badge>
                            <span className="text-xl font-bold text-[#1877F2]">
                        {product.price.toLocaleString()} €
                      </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* MODALE CRÉATION */}
        <AnimatePresence>
          {isCreateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">Nouveau Produit</h3>
                    <button onClick={() => setIsCreateModalOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
                  </div>

                  <form onSubmit={handleCreate} className="p-6 space-y-6">
                    <div className="flex gap-6">
                      {/* Image Upload */}
                      <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-32 h-32 flex-shrink-0 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#1877F2] hover:bg-blue-50 cursor-pointer flex items-center justify-center overflow-hidden transition-all group"
                      >
                        {imagePreview ? (
                            <Image src={imagePreview} alt="Preview" width={128} height={128} className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center text-gray-400 group-hover:text-[#1877F2]">
                              <Upload className="w-6 h-6 mx-auto mb-1" />
                              <span className="text-xs">Photo</span>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                      </div>

                      <div className="flex-1 space-y-4">
                        <Input
                            label="Nom du produit"
                            placeholder="Ex: T-Shirt Syndicat"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                              label="Référence (SKU)"
                              placeholder="TSH-001"
                              value={formData.sku}
                              onChange={(e) => setFormData({...formData, sku: e.target.value})}
                              required
                          />
                          <Input
                              label="Catégorie"
                              placeholder="Vêtements"
                              value={formData.category}
                              onChange={(e) => setFormData({...formData, category: e.target.value})}
                              required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                          label="Prix (€)"
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                          required
                      />
                      <Input
                          label="Stock initial"
                          type="number"
                          min="0"
                          value={formData.stock}
                          onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                          required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 ml-1">Description</label>
                      <textarea
                          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 focus:border-[#1877F2] outline-none min-h-[100px]"
                          placeholder="Description détaillée du produit..."
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          required
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <Button type="button" variant="ghost" onClick={() => setIsCreateModalOpen(false)}>
                        Annuler
                      </Button>
                      <Button type="submit" isLoading={isActionLoading}>
                        Créer le produit
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

        {/* MODALE STOCK */}
        <AnimatePresence>
          {isStockModalOpen && selectedProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ajuster le stock</h3>
                    <p className="text-gray-500 text-sm mb-6">{selectedProduct.name}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <span className="text-sm text-gray-500 block mb-1">Stock actuel</span>
                      <span className="text-3xl font-bold text-gray-900">{selectedProduct.stock}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Button
                          variant="outline"
                          onClick={() => setStockAdjustment(curr => String(Number(curr) - 1))}
                      >-</Button>
                      <Input
                          type="number"
                          className="text-center font-bold text-lg"
                          placeholder="+/-"
                          value={stockAdjustment}
                          onChange={(e) => setStockAdjustment(e.target.value)}
                      />
                      <Button
                          variant="outline"
                          onClick={() => setStockAdjustment(curr => String(Number(curr) + 1))}
                      >+</Button>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" className="flex-1" onClick={() => setIsStockModalOpen(false)}>Annuler</Button>
                      <Button className="flex-1" onClick={handleStockUpdate} isLoading={isActionLoading}>Valider</Button>
                    </div>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};