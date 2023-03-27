import React from 'react';
import { useSelector } from 'react-redux';
import { Bucket } from './Bucket';
import { BucketForm } from './BucketForm';

export const  BucketList = () => {
  const buckets = useSelector((state) => state.buckets);

  return (
    <div className="bucket-list">
      <BucketForm />
      {buckets &&buckets.map(bucket => <Bucket key={bucket.id} bucket={bucket} />)}
    </div>
  );
};
export default BucketList;
