import app from "./app.js";
import { envVars } from "./app/config/env.js";
const bootstrap = async () => {
    app.listen(envVars.PORT, () => {
        console.log(`Example app listening on port ${envVars.PORT}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map