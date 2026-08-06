-- Leave access reads these columns from users. Older production databases
-- have the leave tables but predate these columns.
ALTER TABLE `users` ADD COLUMN `leave_unit_id` integer;
--> statement-breakpoint
ALTER TABLE `users` ADD COLUMN `management_area` text;
