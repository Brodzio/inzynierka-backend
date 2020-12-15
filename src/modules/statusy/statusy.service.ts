import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StatusyRepository } from "./statusy.repository";

@Injectable()
export class StatusyService {
    @InjectRepository(StatusyRepository)
    private statusyRepository: StatusyRepository;
} {}