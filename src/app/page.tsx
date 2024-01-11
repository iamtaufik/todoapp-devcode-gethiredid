'use client';
import Image from 'next/image';
import Card from './components/card';
import AddActivity from './components/add-activity';
import { useEffect } from 'react';
import { useActiviyStore } from './store/zustand';

export default function Home() {
  const getActivities = useActiviyStore((state) => state.getActivities);
  const activities = useActiviyStore((state) => state.activities);

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <div className="flex py-10 flex-col items-center gap-10">
      <div className="flex w-full justify-between items-center">
        <h1 data-cy="activity-title" className="font-bold text-2xl">
          Activity
        </h1>
        <AddActivity />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {activities?.length === 0 && <Image data-cy="activity-empty-state" src="/empty-activity.png" width={500} height={500} alt="Empty Activity" />}
        {activities?.map((activity, index) => (
          <Card key={index} activityItem={index} title={activity.title} createdAt={activity.created_at} activityId={activity.id} />
        ))}
      </div>
    </div>
  );
}
