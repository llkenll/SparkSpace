import React from 'react'
import { useParams } from 'react-router-dom';
export default function SparkDetailPage() {
  const {sparkId} = useParams();
  return (
    <div>DetailPage</div>
  )
}
