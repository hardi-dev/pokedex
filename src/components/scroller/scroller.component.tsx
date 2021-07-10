import { FC, useRef, useEffect } from "react";
import SmoothScrollbar from "smooth-scrollbar";
import { StyledScroller } from "./scroller.styles";

const Scroller: FC = ({ children, ...rest }) => {
  let $content = useRef<HTMLDivElement>(null);
  let scrollbar = useRef<any>(null);

  useEffect(() => {
    if ($content.current) {
      const el = $content.current;

      scrollbar.current = SmoothScrollbar.init(el, {
        // renderByPixels: false,
        damping: 0.075,
        delegateTo: document,
        alwaysShowTracks: true,
      });
    }

    return () => {
      if (scrollbar.current) {
        scrollbar.current.destroy();
        scrollbar.current = null;
      }
    };
  }, []);

  return (
    <StyledScroller data-scrollbar ref={$content} {...rest}>
      {children}
    </StyledScroller>
  );
};

export default Scroller;
