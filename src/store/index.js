import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://geographical.co.uk/wp-content/uploads/Photographing-mountains-in-spring.jpg",
          title: "Naik naik ke puncak gunung",
          description: "Perjalanan yang sangat menyenangkan!",
        },
        {
          id: "m2",
          image:
            "https://www.myrecreationdistrict.com/sites/main/files/imagecache/lightbox/main-images/dsc_0211.jpg",
          title: "Jalan jalan ke taman",
          description: "Taman yang indah!",
        },
        {
          id: "m3",
          image:
            "https://cdn-2.tstatic.net/travel/foto/bank/images/kuliner-nasi-goreng-jawa-enak-untuk-menu-sarapan.jpg",
          title: "Makanan yang enak",
          description: "Rasanya sangat enak!",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
