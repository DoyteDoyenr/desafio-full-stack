import { execSync } from 'node:child_process'

import type { EnvironmentContext, JestEnvironmentConfig } from '@jest/environment'
import { PrismaClient } from '@prisma/client'
import { TestEnvironment } from 'jest-environment-node'
import { v4 as uuid } from 'uuid'

import { env } from '../src/lib/env'

export default class PrismaTestEnvironment extends TestEnvironment {
  private schema = `code_schema_${uuid()}`
  private connectionString = `${env.DATABASE_URL}?schema=${this.schema}`
  private prisma!: PrismaClient

  constructor(cfg: JestEnvironmentConfig, ctx: EnvironmentContext) {
    super(cfg, ctx)
  }

  async setup() {
    await super.setup()

    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    execSync('npx prisma db push')

    this.prisma = new PrismaClient()
  }

  async teardown() {
    await this.prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`)
    await this.prisma.$disconnect()
    await super.teardown()
  }
}
