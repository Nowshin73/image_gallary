import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'image1.jpg', isFeatured: true },
    { id: 2, src: 'image2.jpg', isFeatured: false },
    { id: 3, src: 'image3.jpg', isFeatured: false },
    { id: 4, src: 'image4.jpg', isFeatured: false },
    // Add more images as needed
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  
  const handleSelectImage = (id) => {
    const updatedSelection = [...selectedImages];
    if (updatedSelection.includes(id)) {
      const index = updatedSelection.indexOf(id);
      updatedSelection.splice(index, 1);
    } else {
      updatedSelection.push(id);
    }
    setSelectedImages(updatedSelection);
  };

  const handleDeleteImages = () => {
    const updatedImages = images.filter(image => !selectedImages.includes(image.id));
    setImages(updatedImages);
    setSelectedImages([]);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedImages = [...images];
    const [reorderedImage] = updatedImages.splice(result.source.index, 1);
    updatedImages.splice(result.destination.index, 0, reorderedImage);
    setImages(updatedImages);
  };

  return (
    <div className="bg-gray-200 p-4">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="image-gallery" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-wrap justify-center"
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`w-1/4 p-2 ${
                        snapshot.isDragging ? 'opacity-50' : 'opacity-100'
                      }`}
                    >
                      <div
                        className={`border rounded p-2 ${
                          image.isFeatured ? 'border-yellow-500' : 'border-gray-500'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={`Image ${image.id}`}
                          className="w-full h-auto"
                        />
                        <div className="flex justify-between mt-2">
                          <button
                            onClick={() => handleSelectImage(image.id)}
                            className={`px-2 py-1 ${
                              selectedImages.includes(image.id)
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-800'
                            }`}
                          >
                            {selectedImages.includes(image.id) ? 'Deselect' : 'Select'}
                          </button>
                          <button
                            onClick={() => handleDeleteImages(image.id)}
                            className="px-2 py-1 bg-red-500 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ImageGallery;
