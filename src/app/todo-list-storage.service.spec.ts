import { TestBed, inject } from '@angular/core/testing';

import { TodoListStorageService } from './todo-list-storage.service';

describe('TodoListStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListStorageService]
    });
  });

  it('should ...', inject([TodoListStorageService], (service: TodoListStorageService) => {
    expect(service).toBeTruthy();
  }));
});
