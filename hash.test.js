const crypto = require("./hash");

describe("crypto()", () => {
    it("should generate a SHA-256 hash as output", () => {
        expect(crypto("kalle")).toEqual(
            "7abcb0652773587d24adecc70ae679ef2b7f3ccfb33b4c58f08d64401dd1c31b"
        );
    });
});

it("should generate the same output regardless of the order", () => {
    expect(crypto("kalle", "Aquaman", "batman")).toEqual(
        crypto("batman", "kalle", "Aquaman")
    );
});