"use client";

import { Button } from "@/design-system/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/design-system/ui/dialog";
import { Input } from "@/design-system/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function SubscribeFormModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"}>Subscribete</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-[425px] rounded-lg">
        <DialogHeader>
          <DialogTitle>Suscribirse</DialogTitle>
          <DialogDescription>
            Recibiras notificaciones a tu correo sobre disponibilidad o
            promociones sobre las propiedades
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Email</Label>
            <Input
              id="email"
              value=""
              className="col-span-3"
              placeholder="Ingresa tu correo electronico"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Nombre</Label>
            <Input
              id="name"
              value=""
              className="col-span-3"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Numero</Label>
            <PhoneInput
              onChange={({ target }: any) => console.log(target.value)}
              placeholder="Ingresa tu telefono"
              style={{
                background: "none",
              }}
              defaultCountry="CO"
              className="col-span-3 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enviar</Button>
        </DialogFooter>
      </DialogContent>
      <style global jsx>{`
        .PhoneInputInput {
          background: none;
        }
      `}</style>
    </Dialog>
  );
}
