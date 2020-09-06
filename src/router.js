import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
export { Link as RouterLink } from "react-router-dom";

export const routes = {
  home: "/",
  fallback: "*"
};

export const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

export const useRouter = () => {
  return {
    history: useHistory(),
    location: useLocation(),
    routes
  };
};

export { useHistory, useLocation, useParams };

export const HashScrollManager = ({ children }) => {
  const { location } = useRouter();
  const { hash } = location;
  React.useEffect(() => {
    if (!hash) {
      return;
    }

    const sectionElement = document.querySelector(hash);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return children;
};

export const HashScrollRoute = ({ children, id, threshold }) => {
  const [ref, inView] = useInView({ threshold });
  const scrollRef = React.useRef(null);
  const { location } = useRouter();
  const { hash } = location;

  // TODO: Refactor scroll route management to sync with header bar
  React.useEffect(() => {
    if (hash.includes(id)) {
      console.log("inView", inView);
    }
  }, [hash, id, inView]);

  return (
    <section id={id} ref={ref}>
      <div ref={scrollRef}>{children}</div>
    </section>
  );
};
