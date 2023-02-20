import { env } from './env';
import { app } from './app';

app.listen({ port: env.PORT }).then(() => {
	console.log(`🚀 App is running on port ${env.PORT}`);
});
