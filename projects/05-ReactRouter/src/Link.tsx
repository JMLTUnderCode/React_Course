import { EVENTS } from "./consts";

export function Navigate(href : string | URL | null) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

interface LinkProps {
	target?: string;
	to: string;
  children: React.ReactNode;
}

export function Link ({ target, to, children} : LinkProps) {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = event.button === 0; // Primary Click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      Navigate(to);
    }
  };

	return (
    <a href={to} onClick={handleClick} target={target}>
      {children}
    </a>
  );
}