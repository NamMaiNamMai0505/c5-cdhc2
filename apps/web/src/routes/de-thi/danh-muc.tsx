import { createFileRoute } from '@tanstack/react-router'
import ProtectedRoute from '@/components/ProtectedRoute'
import ExamRoleGuard from '@/components/exam/ExamRoleGuard'
import ExamTrainingCatalogPage from '@/components/exam/ExamTrainingCatalogPage'

export const Route = createFileRoute('/de-thi/danh-muc')({
	component: () => (
		<ProtectedRoute>
			<ExamRoleGuard navKey='catalog'>
				<ExamTrainingCatalogPage />
			</ExamRoleGuard>
		</ProtectedRoute>
	)
})
