import { defineStore } from 'pinia';
import Header from '~/components/Header.vue'; // Header bileşenini içe aktar
import Button from '~/components/Button.vue'; // Button bileşenini içe aktar

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    message: 'Merhaba, bu Pinia Store’dan gelen bir mesaj!',
    components: [],
  }),
  actions: {
    updateMessage(newMessage) {
      this.message = newMessage;
    },

    addComponent(componentType) {
      if (componentType === 'Header') {
        this.components.push(Header); // Header bileşeninin referansını ekle
      } else if (componentType === 'Button') {
        this.components.push(Button); // Button bileşeninin referansını ekle
      }
    },
  }
});
