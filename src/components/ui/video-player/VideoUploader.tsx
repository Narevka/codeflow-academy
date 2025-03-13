
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface VideoUploaderProps {
  onUpload?: (videoUrl: string, title: string, description: string) => void;
}

const VideoUploader = ({ onUpload }: VideoUploaderProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("video/")) {
        setVideoFile(file);
      } else {
        toast.error("Proszę wybrać plik wideo");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoFile) {
      toast.error("Proszę wybrać plik wideo");
      return;
    }

    if (!title.trim()) {
      toast.error("Proszę podać tytuł");
      return;
    }

    setIsUploading(true);

    try {
      // Create a local URL to the video (for development purposes)
      const videoUrl = URL.createObjectURL(videoFile);
      
      // When using public folder, you would copy the file there manually
      // For development purposes, we'll just use the blob URL
      
      // Success notification
      toast.success("Wideo zostało dodane");
      
      // Pass back the video info
      if (onUpload) {
        onUpload(videoUrl, title, description);
      }
      
      // Reset form
      setTitle("");
      setDescription("");
      setVideoFile(null);
      
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Błąd podczas dodawania wideo");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="glass-card p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Dodaj nowe wideo</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="video-file" className="block text-sm mb-2">
            Plik wideo
          </label>
          <input
            id="video-file"
            type="file"
            accept="video/mp4,video/webm"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-dark-purple/20"
          />
          {videoFile && (
            <p className="text-sm mt-2 text-green-400">
              Wybrano: {videoFile.name}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="title" className="block text-sm mb-2">
            Tytuł
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-dark-purple/20"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm mb-2">
            Opis (opcjonalnie)
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-700 bg-dark-purple/20"
            rows={4}
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={isUploading}>
          {isUploading ? "Dodawanie..." : "Dodaj wideo"}
        </Button>
      </form>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Wskazówki:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
          <li>Aby dodać wideo do kursu, umieść pliki MP4 w folderze /public/videos/ w projekcie</li>
          <li>Następnie zaktualizuj ścieżki w pliku src/data/coursesData.ts</li>
          <li>Maksymalny rozmiar pliku: 100MB</li>
          <li>Zalecane formaty: MP4, WebM</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoUploader;
