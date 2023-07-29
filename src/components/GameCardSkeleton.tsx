import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton>
        <CardBody>
          <SkeletonText height="200px" />
        </CardBody>
      </Skeleton>
    </Card>
  );
};
export default GameCardSkeleton;
