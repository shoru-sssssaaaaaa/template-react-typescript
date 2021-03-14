const mockRender = jest.fn();

jest.mock("react-dom", () => ({ render: mockRender }));

describe("Index", () => {
  it("should call render without crashing", async () => {
    const index = await import("../src/index");

    expect({ ...index }).toBeDefined();
    expect(mockRender).toHaveBeenCalled();
  });
});
