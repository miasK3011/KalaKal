import z from "zod";

export const ocorrenciaSchema = z
    .object({
        identificador: z.string().min(1, "O identificador é obrigatório."),
        tipo_caso: z.enum(["humano", "animal"]),
        sexo: z.enum(["masculino", "feminino", "Outro"], {
            errorMap: () => ({ message: "Selecione um sexo válido." }),
        }),
        data_nascimento: z.string().min(1, "A data de nascimento é obrigatória."),
        data_notificacao: z.string().min(1, "A data da notificação é obrigatória."),
        gestante: z.boolean(),
    })
    .superRefine((data, ctx) => {
        if (data.sexo === "feminino" && data.gestante === false) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Selecione uma opção para gestante.",
                path: ["gestante"],
            });
        }
    });