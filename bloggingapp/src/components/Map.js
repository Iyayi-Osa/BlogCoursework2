// src/components/Map.js

import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/map.css';

const Map = ({ posts }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  // Define a default center in case there are no posts
  const defaultCenter = {
    lat: 0,
    lng: 0,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={2}
      center={defaultCenter}
    >
      {posts.map((post) => (
        <Marker
          key={post.id}
          position={{ lat: post.latitude, lng: post.longitude }}
        >
          <InfoWindow>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </InfoWindow>
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default Map;
