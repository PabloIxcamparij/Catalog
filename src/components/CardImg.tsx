import { Card, CardFooter, Button, Image } from "@heroui/react";

export default function CardImg({ shirt, onOpen } : any) {
  return (
    <Card isFooterBlurred className="border-none bg-white" radius="lg">
      <Image alt="Shirt" className="object-cover" height={300} src={shirt.src} width={300} />
     
     
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        
        <Button className="text-black text-lg font-semibold w-full" color="warning" radius="lg" size="lg" variant="flat" onPress={onOpen}>
          Detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
