'use client';
import Link from 'next/link';
import { dateFormater } from '../libs/dateFormater';
import { useActiviyStore } from '../store/zustand';
import { ShowInfo, ShowModal } from './modal';
import axios from 'axios';
import { useState } from 'react';

const Card = ({ title, createdAt, activityItem, activityId }: { title: string; createdAt: string; activityItem: number; activityId: number }) => {
  const { getActivities } = useActiviyStore();
  const handleDelete = (id: number) => {
    ShowModal({
      title: 'Apakah anda yakin ingin menghapus activity',
      item: title,
      negativeText: 'Batal',
      positiveText: 'Hapus',
      onPositiveClick: async () => {
        try {
          await axios.delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`);
          ShowInfo('Activity');

          getActivities();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };
  return (
    <div data-cy={`activity-item-${activityItem}`} className="w-[235px] h-[235px] bg-white shadow-lg rounded-xl flex flex-col justify-between p-4">
      <Link href={`/detail/${activityId}`} className="h-full">
        <div className="">
          <h2 data-cy="activity-item-title" className="font-semibold text-lg">
            {title}
          </h2>
        </div>
      </Link>
      <div className="h-max flex items-center justify-between">
        <p data-cy="activity-item-date" className="text-sm text-gray">
          {dateFormater.format(new Date(Date.parse(String(createdAt))))}
        </p>
        <div data-cy="activity-item-delete-button" className="cursor-pointer" onClick={() => handleDelete(activityId)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
