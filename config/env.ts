import * as z from 'zod'

const createEnv = () => {
    const EnvSchema = z.object({
        GOOGLE_MAPS_API_KEY: z.string().min(1, {
            message: 'A variável GOOGLE_MAPS_API_KEY é obrigatória.',
        }),
    })

    const envVars = {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    }

    const parsedEnv = EnvSchema.safeParse(envVars)

    if (!parsedEnv.success) {
        throw new Error(
            `Configuração de ambiente inválida.
As seguintes variáveis estão ausentes ou inválidas:
${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([key, errors]) => `- ${key}: ${errors.join(', ')}`)
                .join('\n')}`
        )
    }

    return parsedEnv.data
}
const env = createEnv()
export default env