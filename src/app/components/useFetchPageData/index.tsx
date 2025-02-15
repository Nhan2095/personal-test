import { useState, useEffect } from "react";

type DataStructure = {
  banner_menu: string[];
  banner_title: string[];
  bloc_1: {
    cases: {
      category: string;
      cta: string;
      description: string;
      tagline: string;
    }[];
    subtitle: string;
    title: string;
  };
  bloc_2: {
    cases: string[];
    title: string;
  };
  bloc_3: {
    cases: {
      category: string;
      description: string;
      tagline: string;
    }[];
    title: string;
  };
  bloc_4: {
    pictos: {
      description: string;
      title: string;
    }[];
    subtitle: string;
    text: string;
    text_title: string;
    title: string;
  };
  bloc_5: {
    footer: string;
    reviews: {
      author: string;
      date: string;
      review: string;
    }[];
    text: string;
    title: string;
  };
  bloc_6: {
    button: string;
    subtitle: string;
    text: string;
    title: string;
  };
  carte_point: {
    activities: string[];
    address: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    email: string;
    fax: string;
    free_call: string;
    marker_information: string[];
    name: string;
    phone: string;
    website: string;
  }[];
  footer: {
    address: {
      location: string;
      name: string;
      phone: string;
    };
    links: {
      name: string;
      url: string;
    }[];
  };
  head_menu: string[];
  id: string;
  language: string;
};

export default function useFetchPageData(language: string) {
  const [pageData, setPageData] = useState<DataStructure | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.test.soa-dev.net/api/v1/pages?lang=${language}`
        );
        const data = await response.json();
        if (data.length > 0) setPageData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]);

  return pageData;
}
