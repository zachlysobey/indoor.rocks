import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const TestPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (data) => data.json()
  );
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div>{JSON.stringify(data)}</div>
      </Suspense>
    </div>
  );
};

export default TestPage;
