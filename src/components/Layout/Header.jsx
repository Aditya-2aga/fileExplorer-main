import React from 'react';
import { Code, FilePlus, FolderPlus, Trash, Sun, Moon } from 'lucide-react'; 
const Header = ({ 
  isDarkMode, 
  onThemeToggle, 
  selectedNodeId, 
  onCreateFile,  
  onCreateFolder, 
  onDeleteNode    
}) => {

  const handleCreateFile = () => {
   
    onCreateFile(null, 'NewFile');
  };

  const handleCreateFolder = () => {
    onCreateFolder(null, 'NewFolder');
  };

  const handleDelete = () => {
    if (selectedNodeId) {
      // Optional: Add a confirmation dialog here
      // if (window.confirm("Are you sure you want to delete the selected item?")) {
      //   onDeleteNode(selectedNodeId);
      // }
      onDeleteNode(selectedNodeId);
    } else {
      alert("No item selected to delete.");
    }
  };

  return (
    <header className={`p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} shadow-sm`}>
      <div className="container mx-auto flex justify-between items-center max-w-full px-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Code className={`w-7 h-7 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            File Explorer
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCreateFile}
            className={`p-2 rounded-md flex items-center ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-300 text-gray-700'} focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'}`}
            title="New File (Alt+F)" 
          >
            <FilePlus className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleCreateFolder}
            className={`p-2 rounded-md flex items-center ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-300 text-gray-700'} focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'}`}
            title="New Folder (Alt+N)"
          >
            <FolderPlus className="w-5 h-5" />
          </button>
          
          {selectedNodeId && ( 
            <button
              onClick={handleDelete}
              className={`p-2 rounded-md flex items-center ${isDarkMode ? 'hover:bg-red-600 text-red-400 hover:text-white' : 'hover:bg-red-200 text-red-600 hover:text-red-700'} focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-red-500' : 'focus:ring-red-600'}`}
              title="Delete Selected (Del)"
            >
              <Trash className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-md flex items-center ${isDarkMode ? 'hover:bg-gray-700 text-yellow-400' : 'hover:bg-gray-300 text-indigo-600'} focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-yellow-500' : 'focus:ring-indigo-600'}`}
            title="Toggle Theme (Alt+T)"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
