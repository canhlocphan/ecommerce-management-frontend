// libs import
import { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

// eslint-disable-next-line import/prefer-default-export
export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    const { pathname, state } = location;
    const query = {
      ...queryString.parse(location.search), // Convert string to object
      ...params,
    };
    return {
      // For convenience add push(), replace(), state, pathname at top level
      push: navigate.push,
      replace: navigate.replace,
      state,
      pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query,
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      location,
      navigate,
    };
  }, [location, navigate, params]);
};