import React, { useState, useEffect, useCallback, useRef } from "react";
import { RestaurantCard } from "../RestaurantCard";
import { GET_RESTAURANT_URL } from "../../utils.js/constant";
import { ShimmerRest } from "../ShimmerRest";

const debounce = (cb, delay) => {
  let timer;

  return (...params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...params);
    }, delay);
  };
};

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterData, setFilterdata] = useState([]);

  const [searchText, setSearchText] = useState("");

  const filterTopRatedRes = () => {
    const filterRes = restaurantData.filter(
      (rest) => rest?.info?.avgRatingString >= 4.2,
    );
    setRestaurantData(filterRes);
  };

  const debouncedSearch = useRef(
    debounce((value) => {
      console.log("-------", value);
    }, 500),
  ).current;

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    debouncedSearch(event.target.value);
  };

  const applySearchFilter = () => {
    const filtedRest = restaurantData.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    console.log(filtedRest);

    setFilterdata(filtedRest);
  };

  const fetchData = async () => {
    const res = await fetch(GET_RESTAURANT_URL);
    const result = await res.json();

    const data =
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantData(data);
    setFilterdata(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantData.length === 0) {
    return <ShimmerRest />;
  }

  return (
    <div className="flex flex-col gap-3 border border-solid border-[#ccc] rounded-[5px] py-1.5 px-3  ">
      <div className="flex gap-4 justify-between">
        <div className="flex gap-2">
          <input
            type="text"
            className="p-1.5 border border-solid border-[#ccc] rounded-sm w-[200px]"
            value={searchText}
            placeholder="Restaurant"
            onChange={handleInputChange}
          />
          <button
            className="bg-[#54039b] rounded-sm p-1.5 text-white border-none cursor-pointer hover:bg-[#9852d8] hover:scale-[1.01]"
            onClick={applySearchFilter}
          >
            Search
          </button>
        </div>

        <button
          className="bg-[#54039b] rounded-sm p-1.5 text-white border-none cursor-pointer hover:bg-[#9852d8] hover:scale-[1.01]"
          onClick={filterTopRatedRes}
        >
          {" "}
          Top rated
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {filterData.map((restaurant) => {
          const {
            id,
            name,
            costForTwo,
            areaName,
            cloudinaryImageId,
            avgRatingString,
            totalRatingsString,
          } = restaurant.info;
          return (
            <RestaurantCard
              key={id}
              name={name}
              costForTwo={costForTwo}
              areaName={areaName}
              cloudinaryImageId={cloudinaryImageId}
              rating={avgRatingString}
              ratingCount={totalRatingsString}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
