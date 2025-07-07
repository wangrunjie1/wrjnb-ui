# 基于官方 Node 镜像
FROM crpi-i6j49f9grfbfelxl.cn-shanghai.personal.cr.aliyuncs.com/wrj_1/node:24.1.0-alpine as build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 lock 文件
COPY package.json .
COPY package-lock.json .

# 安装依赖
RUN npm ci --prefer-offline --no-audit

# 复制全部源代码
COPY . .

# 构建 Nuxt3 应用
RUN npm run build

# 生产环境镜像
FROM crpi-i6j49f9grfbfelxl.cn-shanghai.personal.cr.aliyuncs.com/wrj_1/node:24.1.0-alpine as production
WORKDIR /app

# 只复制生产依赖和构建产物
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# 启动 Nuxt3
ENV NITRO_PORT=8887
EXPOSE 8887
CMD ["node", ".output/server/index.mjs"]
