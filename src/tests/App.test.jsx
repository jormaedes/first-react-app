// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    // using regex with the i flag allows simpler case-insensitive comparison
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
