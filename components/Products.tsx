'use client';

import React, { useState } from 'react';
import { Plus, Search, Filter, AlertCircle, CheckCircle2, Edit3, Copy, Trash2, ShoppingBag, Package, TrendingUp, DollarSign, Eye, X, Save, Star, Grid, List, BarChart3, Download, History, Minus, PlusIcon } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { MOCK_PRODUCTS } from '@/lib/constants';
import { Product } from '@/lib/types';
import Image from 'next/image';

interface ProductHistory {
  id: string;
  action: string;
  field: string;
  oldValue: string;
  newValue: string;
  date: string;
  user: string;
}

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStock, setFilterStock] = useState('all');
  
  const [showStockModal, setShowStockModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const [stockAdjustment, setStockAdjustment] = useState({ quantity: '', reason: '' });
  const [priceUpdate, setPriceUpdate] = useState({ newPrice: '', reason: '' });
  
  const [editFormData, setEditFormData] = useState({
    title: '',
    price: '',
    sku: '',
    category: '',
    description: '',
    stock: '',
  });

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    sku: '',
    category: '',
    description: '',
    stock: '',
  });

  const [productHistory] = useState<ProductHistory[]>([
    { id: '1', action: 'Création', field: 'Produit', oldValue: '-', newValue: 'Créé', date: '2024-01-15', user: 'Admin Principal' },
    { id: '2', action: 'Modification', field: 'Prix', oldValue: '20.00€', newValue: '25.00€', date: '2024-02-10', user: 'Admin Principal' },
    { id: '3', action: 'Ajustement', field: 'Stock', oldValue: '100', newValue: '150', date: '2024-03-05', user: 'Gestionnaire Stock' },
    { id: '4', action: 'Modification', field: 'Catégorie', oldValue: 'Livres', newValue: 'Publications', date: '2024-03-20', user: 'Admin Principal' },
  ]);

  const toggleStock = (id: string) => {
    setProducts(products.map(p => 
      p.id === id 
        ? { ...p, status: p.status === 'in_stock' ? 'out_of_stock' : 'in_stock' }
        : p
    ));
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    setSelectedProduct(null);
  };

  const handleDuplicate = (product: Product) => {
    const duplicated = { ...product, id: String(products.length + 1), title: `${product.title} (Copie)`, sku: `${product.sku}-COPY` };
    setProducts([...products, duplicated]);
  };

  const handleSave = () => {
    const newProduct: Product = {
      id: String(products.length + 1),
      title: formData.title,
      price: parseFloat(formData.price),
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
      status: 'in_stock',
      sku: formData.sku,
      category: formData.category,
    };
    setProducts([...products, newProduct]);
    setIsCreating(false);
    setFormData({ title: '', price: '', sku: '', category: '', description: '', stock: '' });
  };

  const handleStockAdjustment = () => {
    if (selectedProduct && stockAdjustment.quantity) {
      const currentStock = 156;
      const adjustment = parseInt(stockAdjustment.quantity);
      const newStock = currentStock + adjustment;
      
      alert(`Stock ajusté: ${currentStock} → ${newStock}\nRaison: ${stockAdjustment.reason || 'Non spécifiée'}`);
      
      setShowStockModal(false);
      setStockAdjustment({ quantity: '', reason: '' });
    }
  };

  const handlePriceUpdate = () => {
    if (selectedProduct && priceUpdate.newPrice) {
      const oldPrice = selectedProduct.price;
      const newPrice = parseFloat(priceUpdate.newPrice);
      
      setProducts(products.map(p => 
        p.id === selectedProduct.id 
          ? { ...p, price: newPrice }
          : p
      ));
      
      setSelectedProduct({ ...selectedProduct, price: newPrice });
      
      alert(`Prix modifié: ${oldPrice.toFixed(2)}€ → ${newPrice.toFixed(2)}€\nRaison: ${priceUpdate.reason || 'Non spécifiée'}`);
      
      setShowPriceModal(false);
      setPriceUpdate({ newPrice: '', reason: '' });
    }
  };

  const openEditModal = (product: Product) => {
    setEditFormData({
      title: product.title,
      price: product.price.toString(),
      sku: product.sku,
      category: product.category,
      description: '',
      stock: '156',
    });
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    if (selectedProduct) {
      setProducts(products.map(p => 
        p.id === selectedProduct.id 
          ? { 
              ...p, 
              title: editFormData.title,
              price: parseFloat(editFormData.price),
              sku: editFormData.sku,
              category: editFormData.category,
            }
          : p
      ));
      
      setSelectedProduct({
        ...selectedProduct,
        title: editFormData.title,
        price: parseFloat(editFormData.price),
        sku: editFormData.sku,
        category: editFormData.category,
      });
      
      setShowEditModal(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStock = filterStock === 'all' || 
                        (filterStock === 'in_stock' && product.status === 'in_stock') ||
                        (filterStock === 'out_of_stock' && product.status === 'out_of_stock');
    return matchesSearch && matchesCategory && matchesStock;
  });

  const totalValue = products.reduce((sum, p) => sum + p.price, 0);
  const inStockCount = products.filter(p => p.status === 'in_stock').length;

  if (isCreating) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsCreating(false)}>
                <X className="w-4 h-4 mr-1" /> Annuler
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Ajouter un Produit</h1>
                <p className="text-sm text-gray-500">Complétez les informations du produit</p>
              </div>
            </div>
            <Button onClick={handleSave} leftIcon={Save}>Enregistrer</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <Input 
                    label="Nom du produit *"
                    placeholder="Ex: Manuel Officiel du Syndicat"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      label="Prix (€) *"
                      type="number"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                    <Input 
                      label="SKU *"
                      placeholder="Ex: BK-2024-001"
                      value={formData.sku}
                      onChange={(e) => setFormData({...formData, sku: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      label="Catégorie *"
                      placeholder="Ex: Livres, Vêtements"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    />
                    <Input 
                      label="Stock initial"
                      type="number"
                      placeholder="100"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all min-h-[120px]"
                      placeholder="Décrivez le produit..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-xl sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Aperçu</h3>
                  <div className="bg-gray-100 aspect-square rounded-xl flex items-center justify-center mb-4">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{formData.title || 'Nom du produit'}</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{formData.price ? `${formData.price} €` : '0.00 €'}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">SKU:</span>
                      <span className="font-mono font-semibold">{formData.sku || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Catégorie:</span>
                      <span className="font-semibold">{formData.category || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stock:</span>
                      <span className="font-semibold">{formData.stock || '0'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedProduct) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button variant="ghost" size="sm" onClick={() => setSelectedProduct(null)}>
              <X className="w-4 h-4 mr-1" /> Fermer
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" leftIcon={Copy} onClick={() => handleDuplicate(selectedProduct)}>
                Dupliquer
              </Button>
              <Button variant="secondary" size="sm" leftIcon={Edit3} onClick={() => openEditModal(selectedProduct)}>
                Modifier
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="aspect-square bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.title}</h2>
                <p className="text-gray-600 mb-4">Référence: {selectedProduct.sku}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-blue-600">{selectedProduct.price.toFixed(2)} €</span>
                  <Badge variant={selectedProduct.status === 'in_stock' ? 'success' : 'error'}>
                    {selectedProduct.status === 'in_stock' ? 'En Stock' : 'Rupture'}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Statistiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Ventes totales</span>
                      <span className="font-bold text-gray-900">234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenus générés</span>
                      <span className="font-bold text-emerald-600">5,850 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Stock actuel</span>
                      <span className="font-bold text-gray-900">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Note moyenne</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">4.8</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Actions Rapides</h3>
                  <div className="space-y-2">
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                      onClick={() => setShowStockModal(true)}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Ajuster le stock
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                      onClick={() => setShowPriceModal(true)}
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Modifier le prix
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                      onClick={() => setShowHistoryModal(true)}
                    >
                      <History className="w-4 h-4 mr-2" />
                      Voir l&apos;historique
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {showStockModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Package className="w-6 h-6 text-blue-600" />
                    Ajuster le Stock
                  </h3>
                  <button onClick={() => setShowStockModal(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Stock actuel</span>
                    <span className="text-2xl font-bold text-gray-900">156</span>
                  </div>
                  <div className="text-xs text-gray-500">Dernière mise à jour: Il y a 2 jours</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantité à ajouter/retirer *
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setStockAdjustment({...stockAdjustment, quantity: String(Math.max(0, parseInt(stockAdjustment.quantity || '0') - 10))})}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <input
                      type="number"
                      placeholder="Ex: +50 ou -20"
                      value={stockAdjustment.quantity}
                      onChange={(e) => setStockAdjustment({...stockAdjustment, quantity: e.target.value})}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-center font-bold text-lg"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setStockAdjustment({...stockAdjustment, quantity: String(parseInt(stockAdjustment.quantity || '0') + 10)})}
                    >
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  {stockAdjustment.quantity && (
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600">Nouveau stock: </span>
                      <span className="font-bold text-blue-600">
                        {156 + parseInt(stockAdjustment.quantity)}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Raison de l&apos;ajustement
                  </label>
                  <textarea
                    placeholder="Ex: Réception nouvelle commande, Inventaire, Retour client..."
                    value={stockAdjustment.reason}
                    onChange={(e) => setStockAdjustment({...stockAdjustment, reason: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all min-h-[80px]"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowStockModal(false)}>
                  Annuler
                </Button>
                <Button className="flex-1" onClick={handleStockAdjustment}>
                  Confirmer l&apos;ajustement
                </Button>
              </div>
            </div>
          </div>
        )}

        {showPriceModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                    Modifier le Prix
                  </h3>
                  <button onClick={() => setShowPriceModal(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Prix actuel</span>
                    <span className="text-2xl font-bold text-gray-900">{selectedProduct.price.toFixed(2)} €</span>
                  </div>
                  <div className="text-xs text-gray-500">Dernière modification: Il y a 15 jours</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nouveau prix (€) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Ex: 29.99"
                    value={priceUpdate.newPrice}
                    onChange={(e) => setPriceUpdate({...priceUpdate, newPrice: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-lg font-bold"
                  />
                  {priceUpdate.newPrice && (
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600">Différence: </span>
                      <span className={`font-bold ${parseFloat(priceUpdate.newPrice) > selectedProduct.price ? 'text-emerald-600' : 'text-red-600'}`}>
                        {parseFloat(priceUpdate.newPrice) > selectedProduct.price ? '+' : ''}
                        {(parseFloat(priceUpdate.newPrice) - selectedProduct.price).toFixed(2)} €
                        ({((parseFloat(priceUpdate.newPrice) - selectedProduct.price) / selectedProduct.price * 100).toFixed(1)}%)
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Raison de la modification
                  </label>
                  <textarea
                    placeholder="Ex: Ajustement marché, Promotion, Augmentation coûts..."
                    value={priceUpdate.reason}
                    onChange={(e) => setPriceUpdate({...priceUpdate, reason: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all min-h-[80px]"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowPriceModal(false)}>
                  Annuler
                </Button>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={handlePriceUpdate}>
                  Confirmer le nouveau prix
                </Button>
              </div>
            </div>
          </div>
        )}

        {showHistoryModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <History className="w-6 h-6 text-purple-600" />
                    Historique des Modifications
                  </h3>
                  <button onClick={() => setShowHistoryModal(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
                <div className="space-y-4">
                  {productHistory.map((entry, index) => (
                    <div key={entry.id} className="relative pl-8 pb-4">
                      {index !== productHistory.length - 1 && (
                        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200"></div>
                      )}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="font-bold text-gray-900">{entry.action}</span>
                            <span className="text-gray-600 mx-2">•</span>
                            <span className="text-gray-700">{entry.field}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {new Date(entry.date).toLocaleDateString('fr-FR')}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <span className="text-gray-500">{entry.oldValue}</span>
                          <span className="text-gray-400">→</span>
                          <span className="font-semibold text-blue-600">{entry.newValue}</span>
                        </div>
                        <div className="text-xs text-gray-500">Par {entry.user}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <Button variant="outline" className="w-full" onClick={() => setShowHistoryModal(false)}>
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 animate-in zoom-in-95 duration-300">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Edit3 className="w-6 h-6 text-blue-600" />
                    Modifier le Produit
                  </h3>
                  <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <Input 
                  label="Nom du produit *"
                  value={editFormData.title}
                  onChange={(e) => setEditFormData({...editFormData, title: e.target.value})}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Prix (€) *"
                    type="number"
                    value={editFormData.price}
                    onChange={(e) => setEditFormData({...editFormData, price: e.target.value})}
                  />
                  <Input 
                    label="SKU *"
                    value={editFormData.sku}
                    onChange={(e) => setEditFormData({...editFormData, sku: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Catégorie *"
                    value={editFormData.category}
                    onChange={(e) => setEditFormData({...editFormData, category: e.target.value})}
                  />
                  <Input 
                    label="Stock"
                    type="number"
                    value={editFormData.stock}
                    onChange={(e) => setEditFormData({...editFormData, stock: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all min-h-[100px]"
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({...editFormData, description: e.target.value})}
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowEditModal(false)}>
                  Annuler
                </Button>
                <Button className="flex-1" onClick={handleEditSave}>
                  Enregistrer les modifications
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Catalogue Produits
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} • {inStockCount} en stock
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex gap-2 bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <Button variant="outline" size="md" leftIcon={Download}>
            Exporter
          </Button>
          <Button onClick={() => setIsCreating(true)} leftIcon={Plus} className="shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-emerald-500 to-emerald-600">
            Ajouter un Produit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-blue-100 text-sm mb-1">Total Produits</p>
            <p className="text-3xl font-bold">{products.length}</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle2 className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-emerald-100 text-sm mb-1">En Stock</p>
            <p className="text-3xl font-bold">{inStockCount}</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-purple-100 text-sm mb-1">Valeur Totale</p>
            <p className="text-3xl font-bold">{totalValue.toFixed(0)} €</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 opacity-80" />
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-orange-100 text-sm mb-1">Catégories</p>
            <p className="text-3xl font-bold">{categories.length - 1}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-xl">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher par nom ou SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-blue-500 cursor-pointer outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'all' ? 'Toutes catégories' : cat}</option>
              ))}
            </select>
            <select
              value={filterStock}
              onChange={(e) => setFilterStock(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-blue-500 cursor-pointer outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
            >
              <option value="all">Tous les stocks</option>
              <option value="in_stock">En stock</option>
              <option value="out_of_stock">Rupture</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/95 backdrop-blur shadow-lg border-0 font-semibold">
                    {product.category}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                  <button 
                    className="p-3 bg-white text-gray-700 rounded-xl hover:text-blue-600 hover:scale-110 transition-all shadow-xl"
                    onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-3 bg-white text-gray-700 rounded-xl hover:text-blue-600 hover:scale-110 transition-all shadow-xl"
                    onClick={(e) => { e.stopPropagation(); handleDuplicate(product); }}
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-3 bg-white text-red-600 rounded-xl hover:bg-red-50 hover:scale-110 transition-all shadow-xl"
                    onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 line-clamp-1 text-base mb-1 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">{product.sku}</p>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xl font-bold text-gray-900">{product.price.toFixed(2)} €</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleStock(product.id); }}
                    className={`flex items-center px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      product.status === 'in_stock' 
                        ? 'bg-emerald-50 text-emerald-700 ring-2 ring-emerald-200 hover:bg-emerald-100' 
                        : 'bg-red-50 text-red-700 ring-2 ring-red-200 hover:bg-red-100'
                    }`}
                  >
                    {product.status === 'in_stock' ? (
                      <><CheckCircle2 className="w-3 h-3 mr-1.5" /> Stock</>
                    ) : (
                      <><AlertCircle className="w-3 h-3 mr-1.5" /> Rupture</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => setIsCreating(true)}
            className="group border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all duration-300 min-h-[320px]"
          >
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">Ajouter un produit</span>
            <span className="text-sm text-gray-500 mt-1">au catalogue</span>
          </button>
        </div>
      ) : (
        <Card className="border-0 shadow-xl">
          <div className="divide-y divide-gray-100">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="p-6 hover:bg-blue-50/30 transition-all cursor-pointer group"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-mono">{product.sku}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">{product.price.toFixed(2)} €</p>
                        <Badge variant={product.status === 'in_stock' ? 'success' : 'error'} className="mt-1">
                          {product.status === 'in_stock' ? 'En Stock' : 'Rupture'}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleDuplicate(product); }}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}>
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
