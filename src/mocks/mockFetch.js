const activity = {
  activity: "Mocked activity",
  type: "",
  participants: 1,
  price: 0,
  link: "",
  key: "123456",
  accessibility: 0,
};

export default async function mockFetch(url) {
  switch (url) {
    case "http://www.boredapi.com/api/activity/?": {
      return {
        ok: true,
        status: 200,
        json: async () => activity,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
