// CustomButton.test.jsx

import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "@/components/CustomButton";

describe("CustomButton", () => {
  it("should render a button with the text 'Click me'", () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeInTheDocument();
  });
  
  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup()
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Click me" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
