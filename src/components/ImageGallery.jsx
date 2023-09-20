import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./SkeletonLoading";
import Search from "./Search";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { closestCenter } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const SortableImage = ({ item, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: transform ? 1 : 0,
    opacity: transform ? 0.8 : 1,
    // rotate: transform ? "1deg" : "0deg",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="border border-gray-300 rounded-2xl overflow-hidden flex flex-col justify-between gap-2"
    >
      <img src={item.url} alt={`Image ${index}`} className="w-full" />
      <p className="m-2 pl-2 font-semibold">{item.tag}</p>
    </div>
  );
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const tags = [
      "nature",
      "animal",
      "place",
      "architecture",
      "food",
      "travel",
    ];
    const imagesPerTag = 2;

    const fetchImages = async () => {
      try {
        const allImageData = [];

        for (const tag of tags) {
          for (let i = 0; i < imagesPerTag; i++) {
            const response = await axios.get(
              `https://source.unsplash.com/200x200/?${tag}`
            );
            allImageData.push({ tag, url: response.request.responseURL });
          }
        }

        const shuffledImageData = shuffleArray(allImageData);

        setImageData(shuffledImageData);
        setFilteredData(shuffledImageData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Filter images based on the search query
    const filteredImages = imageData.filter((item) =>
      item.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredImages);
  }, [searchQuery, imageData]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setFilteredData((images) => {
      return arrayMove(images, active.id, over.id);
    });
  };

  return (
    <div>
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />
      <div className="">
        {loading ? (
          <div className="grid grid-cols-4">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="p-2 border border-gray-300">
                <Loading />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext items={filteredData.map((item, index) => index)}>
                {filteredData.map((item, index) => (
                  <SortableImage key={item.url} item={item} index={index} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
