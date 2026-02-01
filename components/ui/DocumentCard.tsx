import React from 'react';
import { FileText, Download, Eye, Upload, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface DocumentCardProps {
    title: string;
    description?: string;
    fileUrl?: string; // URL du fichier existant
    onUpload: (file: File) => void;
    accept?: string;
    required?: boolean;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
                                                              title,
                                                              description,
                                                              fileUrl,
                                                              onUpload,
                                                              accept = ".pdf",
                                                              required = false
                                                          }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [selectedFileName, setSelectedFileName] = React.useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFileName(file.name);
            onUpload(file);
        }
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-xl p-4 transition-all hover:border-blue-300 hover:shadow-md flex items-start gap-4">
            {/* Icone */}
            <div className={`p-3 rounded-lg flex-shrink-0 ${fileUrl || selectedFileName ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                {fileUrl || selectedFileName ? <CheckCircle className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>

            {/* Contenu */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-semibold text-slate-900 truncate pr-4">
                            {title} {required && <span className="text-red-500">*</span>}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {selectedFileName ? `Sélectionné: ${selectedFileName}` : description || "Document PDF requis"}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-4">
                    <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="h-8 text-xs"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload className="w-3 h-3 mr-2" />
                        {fileUrl ? 'Remplacer' : 'Importer'}
                    </Button>

                    {fileUrl && (
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                            <Eye className="w-3 h-3 mr-1.5" />
                            Voir le document
                        </a>
                    )}
                </div>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept={accept}
                onChange={handleFileChange}
            />
        </div>
    );
};