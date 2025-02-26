import { Card, CardFooter, Button, Image } from "@heroui/react";
import { shirtType } from "@/types/index";

type CardImgProps = {
  shirt: shirtType;
  onOpen: () => void;
};

export default function CardImg({ shirt, onOpen }: CardImgProps) {
  return (
    <Card isFooterBlurred className="border-none bg-white" radius="lg">
      <Image
        alt="Shirt"
        className="object-cover"
        height={300}
        src={shirt.src}
        width={300}
      />

      <CardFooter className="absolute bottom-1 shadow-2xl ml-1 z-10">
        <Button
          className="text-white text-lg font-semibold w-full"
          radius="lg"
          size="lg"
          variant="flat"
          onPress={onOpen}
        >
          Detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
