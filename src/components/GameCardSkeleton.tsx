import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton>
        <CardBody>
          <SkeletonText height="200px" />
        </CardBody>
      </Skeleton>
    </Card>
  );
};
export default GameCardSkeleton;
