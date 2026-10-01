import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the resume-driven portfolio content", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /julia gontijo lopes/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /selected work/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/agentic video editing tools/i)).toBeInTheDocument();
  expect(screen.queryByLabelText(/selected results/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
    "download",
    "Julia_Gontijo_Lopes_Resume.pdf"
  );
});
