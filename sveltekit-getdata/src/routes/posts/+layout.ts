export async function load({ data }: { data: any }) {
  return {
    ...data,
    layout: true
  };
}
