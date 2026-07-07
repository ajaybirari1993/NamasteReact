import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurantCard from "../RestaurantCard";

const MOCK_CARD = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "573081",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/2748d106-91bb-42f3-b488-56e7bf76cf2b_573081.JPG",
    locality: "Bakori Road",
    areaName: "Wagholi",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 3.9,
    parentId: "547",
    avgRatingString: "3.9",
    totalRatingsString: "5.0K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 1.9,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-06-23 03:15:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
          description: "Top-rated for Bolt, based on user votes.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
            {
              attributes: {
                description: "Top-rated for Bolt, based on user votes.",
                imageId:
                  "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                theme: "",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      discountTag: "FLAT DEAL",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-b80ecd45-a10b-4339-a3aa-0dfd549104b6",
  },
  cta: {
    link: "https://www.swiggy.com/city/pune/kfc-bakori-road-wagholi-rest573081",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

describe("RestaurantCard component", () => {
  it("Should render the component", () => {
    const {
      id,
      name,
      costForTwo,
      areaName,
      cloudinaryImageId,
      avgRatingString,
      totalRatingsString,
      aggregatedDiscountInfoV3,
    } = MOCK_CARD.info;

    render(
      <RestaurantCard
        key={id}
        name={name}
        costForTwo={costForTwo}
        areaName={areaName}
        cloudinaryImageId={cloudinaryImageId}
        rating={avgRatingString}
        ratingCount={totalRatingsString}
      />,
    );

    const restName = screen.getByText("KFC");
    expect(restName).toBeInTheDocument();
  });
});
