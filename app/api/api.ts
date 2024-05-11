const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data.results;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function searchCharacters(input: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${BASE_URL}/character?name=${input}`);
    if (!response.ok) {
      throw new Error("Nothing found");
    }
    const data = await response.json();

    return data.results;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
