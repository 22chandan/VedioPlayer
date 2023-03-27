import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardList } from './CardList';
import { BucketForm } from './BucketForm';
import { deleteBucket } from '../redux/store';

export const Bucket = ({ bucket }) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleBucketDelete = () => {
    dispatch(deleteBucket(bucket.id));
    history.push('/');
  };

  return (
    <div className="bucket">
      <div className="bucket-header">
        <h2>{bucket.name}</h2>
        <div className="bucket-header-actions">
          <BucketForm edit bucket={bucket} />
          <button className="bucket-delete" onClick={handleBucketDelete}>
            Delete Bucket
          </button>
        </div>
      </div>
      <CardList bucketId={bucket.id} />
    </div>
  );
};
