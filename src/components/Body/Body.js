import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { RestaurantCard, withDealLabel } from "../RestaurantCard";
import { GET_RESTAURANT_URL } from "../../utils.js/constant";
import { ShimmerRest } from "../ShimmerRest";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurantsList } from "../../utils.js/slices/restaurantSlice";
// import { UserContext } from "../../utils.js/UserContext";

const debounce = (cb, delay) => {
  let timer;

  return (...params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...params);
    }, delay);
  };
};

const RestaurantDeal = withDealLabel(RestaurantCard);

const Body = () => {
  const dispatch = useDispatch();

  const restaurantData = useSelector(
    (state) => state.restaurant.restaurantsList,
  );

  const [filterData, setFilterdata] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const { name, updateName } = useContext(UserContext);

  const filterTopRatedRes = () => {
    const filterRes = restaurantData.filter(
      (rest) => rest?.info?.avgRatingString >= 4.2,
    );
    setFilterdata(filterRes);
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

    setFilterdata(filtedRest);
  };

  const fetchData = async () => {
    const res = await fetch(GET_RESTAURANT_URL);
    const result = await res.json();

    const data =
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    dispatch(setRestaurantsList(data));
    setFilterdata(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (filterData.length === 0) {
    return <ShimmerRest />;
  }

  if (restaurantData.length === 0) {
    return <h3>No restaurant found</h3>;
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
        {/* 
        <div className="ml-2">
          <label htmlFor="userName">Name: </label>
          <input
            type="text"
            className="p-1.5 border border-solid border-[#ccc] rounded-sm w-[200px]"
            value={name}
            placeholder="Restaurant"
            onChange={(e) => updateName(e.target.value)}
          />
        </div> */}

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
            aggregatedDiscountInfoV3,
          } = restaurant.info;
          return aggregatedDiscountInfoV3?.header ? (
            <RestaurantDeal
              key={id}
              name={name}
              costForTwo={costForTwo}
              areaName={areaName}
              cloudinaryImageId={cloudinaryImageId}
              rating={avgRatingString}
              ratingCount={totalRatingsString}
              deal={aggregatedDiscountInfoV3}
            />
          ) : (
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
