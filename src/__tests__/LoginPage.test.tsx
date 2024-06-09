// src/pages/LoginPage.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

describe("LoginPage", () => {
  test("renders login form", () => {
    render(<LoginPage />);

    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("shows error message with invalid credentials", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "Invalid User" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "invalidpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid username or password"
    );
  });

  test("shows success message with valid credentials", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "johndoe@123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.getByText("Login successful!")).toBeInTheDocument();
  });

  test("clears error message when success occurs", () => {
    render(<LoginPage />);

    // First trigger an error
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "Invalid User" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "invalidpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid username or password"
    );

    // Now enter valid credentials
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "johndoe@123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByText("Login successful!")).toBeInTheDocument();
  });
});
