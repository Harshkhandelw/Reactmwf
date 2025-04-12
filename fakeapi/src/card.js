import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const API_URL = "https://fakestoreapi.com/docs#tag/Products"; // Replace with your API URL

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {data.map((item) => (
        <Card key={item.id} className="p-4 shadow-lg rounded-lg border">
          <CardContent>
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.email}</p>
            <p className="text-gray-500">{item.phone}</p>
            <Button className="mt-3">View Profile</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FetchDataComponent;
