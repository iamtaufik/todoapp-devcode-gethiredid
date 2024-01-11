import axios from 'axios';
import { create } from 'zustand';
import { Activity } from '../types/activity';

type ActivityStore = {
  activities: Activity[];
  isLoading: boolean;
  addActivity: ({ title }: { title: string }) => void;
  removeActivity: (id: number) => void;
  getActivities: () => void;
};

export const useActiviyStore = create<ActivityStore>((set) => ({
  activities: [],
  isLoading: false,
  getActivities: async () => {
    try {
      const response = await axios.get('https://todo.api.devcode.gethired.id/activity-groups?email=muhtopik07@gmail.com');
      set({
        activities: response.data.data,
      });

      return response.data.data as Activity[];
    } catch (error: any) {
      console.log(error.message);
    }
  },
  addActivity: async ({ title }: { title: string }) => {
    set({
      isLoading: true,
    });
    try {
      await axios.post('https://todo.api.devcode.gethired.id/activity-groups', {
        title: 'coba 1',
        email: 'muhtopik07@gmail.com',
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      set({
        isLoading: false,
      });
    }
  },
  removeActivity: async (id: number) => {
    set({
      isLoading: true,
    });
    try {
      await axios.delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      set({
        isLoading: false,
      });
    }
  },
}));
