import { describe, it, expect, beforeEach, vi } from "vitest";
import type { Mock } from "vitest";
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Router } from "../components/Router";
import { getCurrentPath } from "../utils";
import { Route } from "../components/Route";
import { Link } from "../components/Link";

vi.mock("../utils.ts", () => ({
  getCurrentPath: vi.fn()
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("should render without problems", () => {
    render(
      <Router routes={[]} defaultComponent={() => <div>Default</div>}>
        <></>
      </Router>
    );
    expect(true).toBeTruthy();
  });

  it("should render the default component when no route matches", () => {
    render(
      <Router routes={[]} defaultComponent={() => <div>404</div>}>
        <></>
      </Router>
    );
    expect(screen.getByText("404")).toBeTruthy();
  });

  it("should render the component of the first route that matches", () => {
    (getCurrentPath as Mock).mockReturnValue("/about");
    const routes = [
      { path: "/", Component: () => <div>Home</div> },
      { path: "/about", Component: () => <div>About</div> }
    ]
    render(
      <Router routes={routes} defaultComponent={() => <div>404</div>}>
        <></>
      </Router>
    );
    expect(screen.getByText("About")).toBeTruthy();
  });

  it("should navigate using Links", () => {
    (getCurrentPath as Mock).mockReturnValueOnce("/");

    render(
      <Router routes={[]} defaultComponent={() => <div>404</div>}>
        <Route path="/" Component={() => {
          return (
            <div>
              <h1>Home</h1>
              <Link to="/about">Go to About</Link>
            </div>
          );
        }} />
        <Route path="/about" Component={() => <h1>About page</h1>} />
      </Router>
    );

    expect(screen.getByText(/Go to About/)).toBeTruthy();

    const button = screen.getByText(/Go to About/);
    fireEvent.click(button);

    expect(screen.getByText(/About page/)).toBeTruthy();
  });

});
