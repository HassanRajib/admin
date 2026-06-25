"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters!" })
    .max(50),

  email: z.string().email({
    message: "Invalid email address!",
  }),

  phone: z.string().min(10).max(15),

  location: z.string().min(2),

  role: z.enum(["admin", "user"]),
});

type FormValues = z.infer<typeof formSchema>;

const EditUser = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      username: "john.doe",
      email: "john.doe@gmail.com",
      phone: "+1 234 5678",
      location: "New York, NY",
      role: "admin",
    },
  });

  const role = watch("role");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>

        <SheetDescription asChild>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="space-y-6">
              {/* Username */}
              <Field>
                <FieldLabel>Username</FieldLabel>

                <FieldContent>
                  <Input {...register("username")} />

                  <FieldDescription>
                    This is your public username.
                  </FieldDescription>

                  {errors.username && (
                    <FieldError>{errors.username.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel>Email</FieldLabel>

                <FieldContent>
                  <Input {...register("email")} />

                  <FieldDescription>
                    Only admin can see your email.
                  </FieldDescription>

                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              {/* Phone */}
              <Field>
                <FieldLabel>Phone</FieldLabel>

                <FieldContent>
                  <Input {...register("phone")} />

                  <FieldDescription>
                    Only admin can see your phone number.
                  </FieldDescription>

                  {errors.phone && (
                    <FieldError>{errors.phone.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              {/* Location */}
              <Field>
                <FieldLabel>Location</FieldLabel>

                <FieldContent>
                  <Input {...register("location")} />

                  <FieldDescription>
                    This is the public location.
                  </FieldDescription>

                  {errors.location && (
                    <FieldError>{errors.location.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              {/* Role */}
              <Field>
                <FieldLabel>Role</FieldLabel>

                <FieldContent>
                  <Select
                    value={role}
                    onValueChange={(value) =>
                      setValue("role", value as "admin" | "user", {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>

                  <FieldDescription>
                    Only verified users can be admin.
                  </FieldDescription>

                  {errors.role && (
                    <FieldError>{errors.role.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </FieldGroup>
          </form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditUser;
