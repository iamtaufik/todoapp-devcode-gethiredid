'use client';

import React, { useState } from 'react';
import Button from './button';
import { useActiviyStore } from '../store/zustand';
import axios from 'axios';

const AddActivity = () => {
  const { getActivities } = useActiviyStore();
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    try {
      await axios.post('https://todo.api.devcode.gethired.id/activity-groups', {
        title: 'coba 1',
        email: 'muhtopik07@gmail.com',
      });
      getActivities();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return <Button data-cy="activity-add-button" disabled={isLoading} type="button" text="Tambah" onClick={handleClick} />;
};

export default AddActivity;
